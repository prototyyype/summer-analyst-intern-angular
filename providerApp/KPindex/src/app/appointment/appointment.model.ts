export class StaffType {
	constructor(public description: string, public code: string, public role: string,
		public active: string, public modifiedBy: string, public modifiedDate: string) {}
}

export class AppointmentType {
  constructor(
    public date: string,
    public time: string,
    public service: string,
    public doctor: string
  ) {}
  //

}
