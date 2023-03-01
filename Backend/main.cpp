#include <bits/stdc++.h>
#include <zmq.hpp>
#include <string.h>

using namespace std;
static const string PUBLISH_ENDPOINT = "tcp://127.0.0.1:3000";

int main(int, char**) {
  zmq::context_t context;
  zmq::socket_type type = zmq::socket_type::pub;
  zmq::socket_t socket (context, type);

  // Open the connection
  cout << "Binding to " << PUBLISH_ENDPOINT << "..." << endl;
  socket.bind(PUBLISH_ENDPOINT);

  // Pause to connect
  this_thread::sleep_for(chrono::milliseconds(1000));

  while(true) {

    // Current time in ms
    unsigned long ms = chrono::system_clock::now().time_since_epoch() /
        chrono::milliseconds(1);

    string text = "Hello at " + to_string(ms);

    // Send it off to any subscribers
    socket.send(zmq::str_buffer("data - HELLO WORLD"));
    cout << "[SENT] at " << ms << ": " << text << endl;

    this_thread::sleep_for(chrono::microseconds(1000000));
  }

  // Unreachable, but for good measure
  socket.disconnect(PUBLISH_ENDPOINT);
  return 0;
}
