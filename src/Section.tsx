export class Section {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;

  constructor(
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string,
    size?: string
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.id = id;
    this.linkUrl = linkUrl;
    this.size = size;
  }
}
