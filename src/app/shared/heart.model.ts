export class Heart {
  constructor(
    public full: boolean,
    public fullHeartUrl: string = '../../assets/full-heart.png',
    public emptyHeartUrl: string = '../../assets/empty-heart.png'
  ) {}

  public displaysHeart(): string {
    if (this.full) {
      return this.fullHeartUrl;
    }
    return this.emptyHeartUrl;
  }
}
