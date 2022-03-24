interface BlockType {
  title : string;
  description: string;
  time: string;
}

interface SectionType {
	sectionName: string;
	blockList: BlockType[];
}