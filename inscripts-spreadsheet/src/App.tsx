import Toolbar from './components/Row/Row';
// import Spreadsheet from './components/Table/Table';
import Tabs from './components/TitleRow/TitleRow';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Topbar />
      
      <Toolbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* <Spreadsheet /> */}
      </div>
      <Tabs />
    </div>
  );
}

export default App;
