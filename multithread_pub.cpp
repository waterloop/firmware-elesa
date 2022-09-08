#include <future>
#include <iostream>
#include <string>

#include "../Elesa/cppzmq/zmq.hpp"
#include "../Elesa/cppzmq/zmq_addon.hpp"

int main() {
    zmq::context_t ctx(1);
    zmq::socket_t publisher(ctx, zmq::socket_type::pub);
    publisher.bind("tcp://127.0.0.1:3000");

    while (true) {
        publisher.send(zmq::str_buffer("kitty cats"), zmq::send_flags::sndmore);
        publisher.send(zmq::str_buffer("neko"));
    }
}
