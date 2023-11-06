package natwest.billing;

public class Holiday {

	String holidayname;
	String holidaydate;
	
		public Holiday() {
		super ();
		// TODO: Auto-generated constructor stub
		}
		
		public Holiday(String holidayname, String holidaydate) {
			super ();
			this.holidayname = holidayname;
			this.holidaydate = holidaydate;
			
			}

		public void setHolidayname(String holidayname) {
			this.holidayname = holidayname;
		}
		
		public void setHolidaydate(String holidaydate) {
			this.holidaydate = holidaydate;
		}
		
		public void display() {
			System.out.println("Welcome to Holidays " + holidayname + " " + holidaydate);
					
		}
	}
	