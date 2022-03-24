interface BlockType {
  title : string;
  description: string;
  time: string;
  markdown: string;
}

interface SectionType {
	sectionName: string;
	blockList: BlockType[];
}