import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowHelperService {

  constructor() { }
  setWindowTitle(title: string): void {
    (window as any).title = title;
  }
  getAppDir(): string {
    return (window as any).localDir;
  }
}
