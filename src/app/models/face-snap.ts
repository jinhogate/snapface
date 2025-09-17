export class FaceSnap {
  id: string;
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public image: string,
    public location?: string
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }
}
