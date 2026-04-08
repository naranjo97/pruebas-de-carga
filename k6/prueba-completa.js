import http from 'k6/http';
import { sleep, check } from 'k6';

const usuarios = [
  { nombre: 'Juan Garcia',  trabajo: 'QA Engineer' },
  { nombre: 'Maria Lopez',  trabajo: 'Developer' },
  { nombre: 'Carlos Ruiz',  trabajo: 'DevOps' },
  { nombre: 'Ana Martinez', trabajo: 'Scrum Master' },
  { nombre: 'Luis Perez',   trabajo: 'Tester' },
];

export const options = {
  vus: 50,
  duration: '30s',
};

export default function () {
  const dato = usuarios[__VU % usuarios.length];
  const idValido = (__VU % 100) + 1;

  const loginRes = http.post(
    'https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
      title:  'login',
      body:   'eve.holt@reqres.in',
      userId: idValido,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );

  check(loginRes, {
    'login status 201':          (r) => r.status === 201,
    'login tiempo menor 2000ms': (r) => r.timings.duration < 2000,
    'id extraido existe':        (r) => r.json('id') !== undefined,
  });

  sleep(1);

  const getRes = http.get(
    `https://jsonplaceholder.typicode.com/posts/${idValido}`,
    { headers: { Authorization: `Bearer token-simulado-${idValido}` } }
  );

  check(getRes, {
    'get status 200':          (r) => r.status === 200,
    'get tiempo menor 2000ms': (r) => r.timings.duration < 2000,
    'get tiene titulo':        (r) => r.json('title') !== undefined,
  });

  sleep(1);

  const crearRes = http.post(
    'https://jsonplaceholder.typicode.com/users',
    JSON.stringify({
      name:  dato.nombre,
      email: `${dato.nombre.replace(' ', '').toLowerCase()}@test.com`,
      job:   dato.trabajo,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );

  check(crearRes, {
    'crear status 201':          (r) => r.status === 201,
    'crear tiempo menor 2000ms': (r) => r.timings.duration < 2000,
    'usuario tiene id':          (r) => r.json('id') !== undefined,
  });

  sleep(1);
}
