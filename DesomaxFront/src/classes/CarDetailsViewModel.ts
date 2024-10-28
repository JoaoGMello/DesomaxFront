export default class CarDetailsViewModel {
  public carList: Array<CarDetails> = []
}

export class CarDetails {
  public model: string = ''
  public brand: string = ''
  public image: any
  public description: string = ''
  public year: string = ''
  public km: number = 0
  public price: string = ''
  public color: string = ''
  public userId: string = ''
  public city: string = ''
  public state: string = ''
  public seller: string = ''
  public like: boolean = false
}
