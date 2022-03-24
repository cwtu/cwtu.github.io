import React from "react";

interface DisplayHashContext {
  blockDisplayHash: string;
  setBlockDisplayHash: (newPage: string) => void;
}

export const BlockDisplayContext = React.createContext<DisplayHashContext>(
	{
		blockDisplayHash: '',
		setBlockDisplayHash: (newPage: string) => {}
	}
)


export const BlockDisplayContextProvider : React.FC = (props) => {
	const [blockDisplayHash, setBlockDisplayHash] = React.useState<string>('')

	return (
		<BlockDisplayContext.Provider value={{blockDisplayHash, setBlockDisplayHash}}>
			{props.children}
		</BlockDisplayContext.Provider>
	)
}