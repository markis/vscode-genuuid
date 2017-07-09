import {  window } from 'vscode';
import { generateUUID } from './uuid';

export function insertuuid() {
  window.activeTextEditor.edit(editBuilder => {
    editBuilder.insert(window.activeTextEditor.selection.active, generateUUID());
  })
}
