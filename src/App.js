// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h3> JANOB JORCH1 </h3>
        <ul>
          <li>Features</li>
          <li>Enterprise</li>
          <li>Support</li>
          <li>Pricing</li>
          <button className='btn0'><a class="btn" href="#">Sign up</a></button>
        </ul>
      </header>

      <main>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">Pricing</h1>
          <p class="lead">Quickly build an effective pricing table for your potential customers with this <br />
            Bootstrap example. It's built with default Bootstrap components and utilities with <br />
            little customization.</p>
        </div>

        <div className='div'>
          <div className='Bir'>
            <span>Free</span>
            <h1 className='s1'>$0 / mo</h1>
            <p>10 users included
              2 GB of storage
              Email support
              Help center access</p>
            <button className='btn1'>Sign up for free</button>
          </div>

          <div className='Ikki'>
            <span>Pro</span>
            <h1 className='s1'>$15 / mo</h1>
            <p>20 users included
              10 GB of storage
              Priority email support
              Help center access</p>
            <button className='btn2'>Get started</button>
          </div>

          <div className='Uch'>
            <span>Enterprise</span>
            <h1 className='s1'>$29 / mo</h1>
            <p>30 users included
              15 GB of storage
              Phone and email support
              Help center access</p>
            <button className='btn3'>Contact us</button>
          </div>
        </div>
      </main>

      <footer>
        <div className='Features'>
          <h4>Features</h4>
          <a href='#'>Cool stuff</a>
          <a href='#'>Random feature</a>
          <a href='#'>Team feature</a>
          <a href='#'>Stuff for developers</a>
          <a href='#'>Another one</a>
          <a href='#'>Last time</a>
        </div>

        <div className='Resources'>
          <h4>Resources</h4>
          <a href='#'>Resource</a>
          <a href='#'>Resource name</a>
          <a href='#'>Another resource</a>
          <a href='#'>Final resource</a>
        </div>

        <div className='About'>
          <h4>About</h4>
          <a href='#'>Team</a>
          <a href='#'>Locations</a>
          <a href='#'>Privacy</a>
          <a href='#'>Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
