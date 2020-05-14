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
     return this.fs.readdirSync(path);
  }

  writeFile(path: string, data: string): boolean {
    console.log("Writing to path: "+path);
    this.fs.writeFile(path, data, function(err){
      if (err) {
        console.error('Error saving module.');
        console.error(err);
        return false;
      }
    });
    return true;
  }
}
