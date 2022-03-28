declare global {
	type SectionType = {
		sectionName: string;
		blockList: BlockType[];
	}

	type BlockType = {
		title : string;
		description: string;
		time: string;
		markdown: string;
	}
	
}

export default undefined