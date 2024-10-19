import { EXAMPLES } from "./data2";
import { CORE_CONCEPTS } from "./data2";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(parameters) {
    setSelectedTopic(parameters);
    // console.log(selectedTopic);
  }
  let tabContent = <p>Please select a Topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].title}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* 1st way */}
            {/* <CoreConcepts
              title={dis[0].title}
              img={dis[0].image}
              description={dis[0].description}
            /> */}
            {/* 2nd way */}
            {/*   <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
            {/* 3rd way 
            57. Outputting List Data Dynamically*/}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        {/* 
          SECTION 48 Component Composition: The special "children" Prop [Core Concept]
          8min 
        */}
        <section id="examples">
          <h2>Examples</h2>
          <menu id="examples">
            {/* 51 PASSING FUNCTIONS AS VALUES */}
            {/* <TabButton label="Components1" /> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
            {/* <TabButton onSelect={handleClick("no anontmous function is used")}> */}
          </menu>
          {/* 52. How NOT to Update the UI - A Look Behind The Scenes of React [Core Concept] */}
          <p>{selectedTopic}</p>
          {/* 
            54. 54. Deriving & Outputting Data Based on State. 
            had error for .cannot read properties of titile
            reason the PM set was on pascal case,so it properties 
            are not picked properly
          */}
          {/* 
            54 + 55 
            55. Rendering Content Conditionally
          */}
          {/* 1st alternative with 2 ways for conditional rendering */}
          {/* {!selectedTopic ? <p>Please select a Topic</p> : null}
          {selectedTopic ? (
            <div className="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].title}</code>
              </pre>
            </div>
          ) : null} */}
          {/* {!selectedTopic ? (
            <p>Please select a Topic</p>
          ) : (
            <div className="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].title}</code>
              </pre>
            </div>
          )} */}

          {/* 2nd alternative way with && {true} operator */}
          {/* in react this operator always outputs the input value
          which comes after the and operator symbol, 
          if the condition before && is true  */}
          {/*   {!selectedTopic && <p>Please select a Topic</p>}
          {selectedTopic && (
            <div className="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].title}</code>
              </pre>
            </div>
          )} */}
          {/* 3rd way */}
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
