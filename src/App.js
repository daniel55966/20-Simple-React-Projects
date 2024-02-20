import './App.css';
import Accordion from './components/accordion';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tac-toe';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResponsiveTest from './components/use-responsive/test';

function App() {
  return (
    <div className="App">
      <div>
        {/* Accordion Component */}
        <Accordion />
      </div>
      <hr></hr>

      <div>
        <h1>Random Color Generator</h1>
        {/* Random Color Component */}
        <RandomColor />
      </div>
      <hr></hr>

      <div>
        <h1>Star Rating</h1>
        {/* Star Rating Component */}
        <StarRating numberOfStars={10}/>
      </div>
      <hr></hr>

      <div>
        <h1>Image Slider</h1>
        {/* Image Slider Component */}
        <ImageSlider         
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      </div>
      <hr></hr>

      <div>
        <h1>Load More Products</h1>
        {/* Load More Products Component */}
        <LoadMoreData />
      </div>
      <hr></hr>

      <div>
        <h1>Tree View</h1>
        {/* Tree View Component */}
        <TreeView menus={menus}/>
      </div>
      <hr></hr>

      <div>
        {/* QR Code Generator Component */}
        <QRCodeGenerator />
      </div>
      <hr></hr>

      <div>
        <h1>Light/Dark Mode Switch</h1>
        {/* Light/Dark Theme Switch Component */}
        <LightDarkMode />
      </div>
      <hr></hr>

      <div>
        {/* Scroll Indicator Component */}
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      </div>
      <hr></hr>

      <div>
        <h1>Custom Tabs Component</h1>
        {/* Custom Tabs Component */}
        <TabTest />
      </div>
      <hr></hr>

      <div>
        <h1>Custom Modal Component</h1>
        {/* Custom Modal Component */}
        <ModalTest />
      </div>
      <hr></hr>

      <div>
        <h1>Github Profile Finder</h1>
        {/* Github Profile Finder Component */}
        <GithubProfileFinder />
      </div>
      <hr></hr>

      <div>
        <h1>Search Autocomplete</h1>
        {/* Search Autocomplete Component */}
        <SearchAutocomplete />
      </div>
      <hr></hr>

      <div>
        <h1>Tic-Tac-Toe</h1>
        {/* Tic-Tac-Toe Component */}
        <TicTacToe />
      </div>
      <hr></hr>

      <div>
        {/* Feature Flags Implementation */}
        <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState>
      </div>
      <hr></hr>

      <div>
        {/* useFetch - Custom Hook Test */}
        <UseFetchHookTest />
        <hr></hr>
      </div>

      <div>
        {/* useOnclickOutside - Custom Hook Test */}
        <UseOnclickOutsideTest />
        <hr></hr>
      </div>

      <div>
        {/* useOnclickOutside - Custom Hook Test */}
        <UseWindowResponsiveTest />
        <hr></hr>
      </div>

      <div>
        {/* Scroll to Top and Bottom Component */}
        <ScrollToTopAndBottom />
      </div>
      <hr></hr>

      
      <div>
        {/* Scroll to Particular Section */}
        <ScrollToSection />
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
