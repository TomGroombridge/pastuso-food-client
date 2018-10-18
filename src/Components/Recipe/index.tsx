import * as React from 'react';
import '../../Styles/debug.css';

const Recipe = () => {
  return(
    <div className="columns">
      <div className="column is-one-quarter-tablet is-full-mobile">
        <div className="card">
          <section className="section">
            {/* This is the recipe image */}
            <figure className="image is-square">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </section>

          <section className="section">
            {/* This is the list of ingrediants */}
            <aside className="menu">
              <p className="menu-label">
                For the meat sauce
              </p>
              <ul className="menu-list">
                <li><a>2 tbsp olive oil</a></li>
                <li><a>2 celery sticks, finely chopped</a></li>
                <li><a>1 onion, finely chopped</a></li>
                <li><a>1 carrot (about 100g/4oz) finely chopped</a></li>
                <li><a>3 garlic cloves, crushed</a></li>
                <li><a>140g pack cubetti di pancetta</a></li>
                <li><a>500g pack beef mince (we used 10% fat)</a></li>
                <li><a>500g pack pork mince or British veal mince</a></li>
                <li><a>200ml milk</a></li>
                <li><a>2 x 400g cans chopped tomatoes</a></li>
                <li><a>2 bay leaves</a></li>
                <li><a>1 rosemary sprig</a></li>
                <li><a>2 thyme sprigs</a></li>
                <li><a>2 tsp dried oregano</a></li>
                <li><a>2 beef stock cubes</a></li>
                <li><a>500ml red wine</a></li>
              </ul>   
              <p className="menu-label">
                For the lasagne
              </p>           
              <ul className="menu-list">
                <li><a>about 400g dried pasta sheets</a></li>
                <li><a>50g parmesan, finely grated</a></li>
              </ul>
              <p className="menu-label">
                For the white sauce
              </p> 
              <ul className="menu-list">
                <li><a>1½ l milk</a></li>
                <li><a>1 onion, thickly sliced</a></li>                
                <li><a>3 bay leaves</a></li>
                <li><a>3 cloves</a></li>
                <li><a>100g butter</a></li>
                <li><a>100g plain flour</a></li>
                <li><a>good grating of nutmeg</a></li>
              </ul>
            </aside>
          </section>
        </div>
      </div>
      <div className="column is-three-quarters-tablet is-full-mobile">
        <section className="section">
          <h1 className="title has-text-centered">Lasagne</h1> 
        </section>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">SERVES</p>
              <p className="title">8</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">PREP TIME</p>
              <p className="title">1H</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">COOK TIME</p>
              <p className="title">3H, 10M</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">DIFFICULTY LEVEL</p>
              <p className="title">EASY</p>
            </div>
          </div>
        </nav>           
      </div>      
    </div>
  )
}

export default Recipe;


