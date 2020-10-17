import React from 'react'

import './App.css'

import YourZone from './components/YourZone'
import Zulu from './components/Zulu'
import Eastern from './components/Eastern'
import Central from './components/Central'
import Mountain from './components/Mountain'
import Pacific from './components/Pacific'
import Alaska from './components/Alaska'
import Hawaii from './components/Hawaii'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>It's 5 o'clock somewhere</h1>
        <div className='your-zone'>
          <YourZone />
        </div>
        <div className='zones'>
          <p>24 hours in a day, 24 time zones on the Earth.</p>
          <p>Time starts at Greenwich Mean Time or GMT for short.  Sometimes also seen as 0 UTC or Coordinated Universal Time.  West of this time zone you decrease an hour to your time East you add an hour.  </p>
          <p>Each time zone has a name.  For the military we use Zulu time for nearly everything.  Zulu is also UTC 0 / GMT 0 or Greenwich Mean Time.  This helps leaders around the world know what time something was sent as it is always in the same time zone reference regardless of the senders actual location.</p>
          <p>In the USA we have 6 main Time zones. Below are those plus Zulu all set to the current time.  Is it 5 o'clock on any listed?</p>
        </div>
        <div className="alt-zones">
          <Zulu />
          <Eastern />
          <Central />
          <Mountain />
          <Pacific />
          <Alaska />
          <Hawaii />
        </div>
      </>
    );
  }
  
};

export default App;