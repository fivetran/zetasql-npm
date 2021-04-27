#include <node.h>

namespace server {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

extern "C" void RunServer();

void Run(const FunctionCallbackInfo<Value>& args) {
  RunServer();
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "50051").ToLocalChecked());
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "run", Run);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}
