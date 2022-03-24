import React from "react";

interface DisplayHashContext {
  blockDisplay: string;
  setBlockDisplay: (newPage: string) => void;
}

export const BlockDisplayContext = React.createContext<DisplayHashContext>(
	{
		blockDisplay: '',
		setBlockDisplay: (newPage: string) => {}
	}
)


export const BlockDisplayContextProvider : React.FC = (props) => {
	const [blockDisplay, setBlockDisplay] = React.useState<string>('')

	return (
		<BlockDisplayContext.Provider value={{blockDisplay, setBlockDisplay}}>
			{props.children}
		</BlockDisplayContext.Provider>
	)
}