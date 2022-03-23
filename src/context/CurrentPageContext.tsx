import React from "react";

interface PageContextProps {
  currentPage: string;
  setCurrentPage: (newPage: string) => void;
}

export const CurrentPageContext = React.createContext<PageContextProps>(
	{
		currentPage: '',
		setCurrentPage: (newPage: string) => {}
	}
)


export const CurrentPageContextProvider : React.FC = (props) => {
	const [currentPage, setCurrentPage] = React.useState<string>('')

	return (
		<CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
			{props.children}
		</CurrentPageContext.Provider>
	)
}