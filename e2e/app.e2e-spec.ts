import { EmployeeMonitoringSystemPage } from './app.po';

describe('employee-monitoring-system App', () => {
  let page: EmployeeMonitoringSystemPage;

  beforeEach(() => {
    page = new EmployeeMonitoringSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
