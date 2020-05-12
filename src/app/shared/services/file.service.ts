import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  fs: any;
  constructor() { 
    this.fs = (window as any).fs;
  }

  getFileAsObject(path: string): any {
    try {
    return JSON.parse(this.fs.readFileSync(path));
    } catch (err) {
      console.error("Error retrieving file: "+path);
    }
  }

  readDirectory(path: string): any {
    this.fs.readdir(path, function(err, items) {
      return items;
    });
  }

  writeFile(path: string, data: string): boolean {
    try {
      this.fs.writeFileSync(path, data);
      return true;
    } catch (err) {
      console.error('Error saving module.');
      console.error(err);
      return false;
    } 
  }
}
