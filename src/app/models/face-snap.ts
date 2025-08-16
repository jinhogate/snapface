export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public image: string,
    public location?: string
  ) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }
}
