import { Component, OnInit } from '@angular/core';
import { reduce, flattenDeep } from "lodash";

@Component({
  selector: 'app-default-chart',
  templateUrl: './default-chart.component.html',
  styleUrls: ['./default-chart.component.css']
})
export class DefaultChartComponent implements OnInit {
  selectedFontFamily: string;
  fontFamilyChoices = ['Palatino Linotype', 'Tahoma', 'Georgia', 'Arial', 'Times New Roman', 'Impact',
    'Verdana', 'Courier New', 'Lucida Console'];
  colorChoices = ['red', 'blue', 'yellow', 'green'];
  iconChoices = ['star_rate', 'supervised_user_circle', 'account_box'];
  colorSelections = {};
  uniqueRoleSelections = {};
  ds = {
    id: '1',
    name: 'Lao Lao',
    role: 'general manager',
    team: 'Team 1',
    children: [
      { id: '2', name: 'Bo Miao', role: 'department manager', managerName: 'Manager 1', team: 'Team 1'},
      {
        id: '3',
        name: 'Su Miao',
        role: 'department manager',
        managerName: 'Manager 1',
        team: 'Team 1',
        children: [
          { id: '4', name: 'Tie Hua', role: 'senior engineer', managerName: 'Manager 1', team: 'Team 2' },
          {
            id: '5',
            name: 'Hei Hei',
            role: 'senior engineer',
            managerName: 'Manager 1',
            team: 'Team 2',
            children: [
              { id: '6', name: 'Dan Zai', role: 'engineer', managerName: 'Manager 1', team: 'Team 3' },
              { id: '7', name: 'Dan Dan', role: 'engineer', managerName: 'Manager 1', team: 'Team 3' },
              { id: '8', name: 'Xiang Xiang', role: 'engineer', managerName: 'Manager 1', team: 'Team 3' },
              { id: '9', name: 'Ke Xin', role: 'engineer', managerName: 'Manager 1', team: 'Team 3' },
              { id: '10', name: 'Xiao Dan', role: 'engineer', managerName: 'Manager 1', team: 'Team 3' },
              { id: '11', name: 'Dan Dan Zai', role: 'engineer', managerName: 'Manager 1', team: 'Team 3' },
            ]
          },
          { id: '12', name: 'Pang Pang', role: 'senior engineer', managerName: 'Manager 1', team: 'Team 4' },
          { id: '13', name: 'Er Pang', role: 'senior engineer', managerName: 'Manager 1', team: 'Team 4' },
          { id: '14', name: 'San Pang', role: 'senior engineer', managerName: 'Manager 1', team: 'Team 4' },
          { id: '15', name: 'Si Pang', role: 'senior engineer', managerName: 'Manager 1', team: 'Team 4' }
        ]
      },
      { id: '16', name: 'Hong Miao', role: 'department manager', managerName: 'Manager 1', team: 'Team 5' },
      { id: '17', name: 'Chun Miao', role: 'department manager', managerName: 'Manager 1', team: 'Team 5' },
      { id: '18', name: 'Yu Li', role: 'department manager', managerName: 'Manager 1', team: 'Team 5' },
      { id: '19', name: 'Yu Jie', role: 'department manager', managerName: 'Manager 1', team: 'Team 5' },
      { id: '20', name: 'Yu Wei', role: 'department manager', managerName: 'Manager 1', team: 'Team 5' },
      { id: '21', name: 'Yu Tie', role: 'department manager', managerName: 'Manager 1', team: 'Team 5' }
    ]
  };

  get datasourceValue() {
    return JSON.stringify(this.ds, null, 2);
  }

  set datasourceValue(v) {
    try {
      this.ds = JSON.parse(v);
    } catch (e) {
      console.log("Error parsing the json");
    }
  }

  constructor() { }

  ngOnInit() {
    this.getUniqueRoles(this.ds).forEach((val) => {
      this.uniqueRoleSelections[val] = '';
    });
    this.getUniqueTeams(this.ds).forEach((val) => {
      this.colorSelections[val] = '';
    });
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  toArray(obj, val) {
    const result = [];
    result.push(obj[val]);
    if (obj.hasOwnProperty('children')) {
      obj.children.forEach((child) => {
        result.push(this.toArray(child, val));
      });
    }
    return result;
  }

  getUniqueRoles(datasource: any) {
    return [...new Set(flattenDeep(this.toArray(datasource, 'role')))];
  }
  getUniqueTeams(datasource: any) {
    return [...new Set(flattenDeep(this.toArray(datasource, 'team')))];
  }
}
