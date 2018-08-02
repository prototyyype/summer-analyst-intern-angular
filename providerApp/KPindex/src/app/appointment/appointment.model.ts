export class AppointmentType {
  constructor(
    public date: string,
    public time: string,
    public medService: string,
    public doctor: string
  ) {}
}
