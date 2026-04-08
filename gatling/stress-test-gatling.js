import {
  simulation,
  scenario,
  exec,
  pause,
  rampUsersPerSec,
  constantUsersPerSec,
  stressPeakUsers,
  global,
  RawFileBody
} from "@gatling.io/core";
import {http} from "@gatling.io/http";

export default simulation((setUp) => {

  const httpProtocol = http
    .baseUrl("https://jsonplaceholder.typicode.com")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0"
    );

  const scn = scenario("No code scenario").exec(
    http("GET Home").get("/posts"),
    pause(10),
    http("GET Page 2").get("/users"),
    pause(10),
    http("GET Page 3").get("/posts/1")
  );

  setUp(
    scn.injectOpen(stressPeakUsers(100).during(30))
  ).assertions(
    global().responseTime().percentile(95.0).lte(2000),
    global().failedRequests().percent().lt(1.0)
  ).protocols(httpProtocol);
});
