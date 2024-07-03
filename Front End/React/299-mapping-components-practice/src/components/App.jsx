import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(entry) {
	return (
		<Entry
			key={entry.id}
			emoji={entry.emoji}
			name={entry.name}
			details={entry.meaning}
		/>
	);
}

function App() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>

			<dl className="dictionary">
        {emojipedia.map(CreateEntry)}
      </dl>
		</div>
	);
}

export default App;
