class ServerAPI {

  static reportError({ errorName, stackTrace, creationTime }) {
    console.log({ errorName, stackTrace, creationTime })
  }

}
