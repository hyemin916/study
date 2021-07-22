{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(loadState: ResourceLoadState) {
    let text: string;
    switch (loadState.state) {
      case 'loading': {
        text = '👀 loading...';
        break;
      }
      case 'success': {
        text = `😃 ${loadState.response.body}`;
        break;
      }
      case 'fail': {
        text = `😱 ${loadState.reason}`;
        break;
      }
      default:
        throw Error('unknown load state');
    }

    console.log(text);
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
