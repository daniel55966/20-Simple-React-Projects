

const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeMode: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showTreeView: true,
  showTabs: true,
}

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(resolve(dummyApiResponse), 500);
    } else {
      reject('An error occurred. Please try again');
    }
  });
}

export default featureFlagsDataServiceCall;