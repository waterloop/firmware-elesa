cmake_minimum_required(VERSION 3.0.0)
project(elesa-backend VERSION 0.1.0)

include(CTest)
enable_testing()

#find cppzmq wrapper, installed by make of cppzmq

add_executable(elesa-backend main.cpp)

find_package(cppzmq)
target_link_libraries(elesa-backend cppzmq)

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)
