import { commands, ExtensionContext } from 'vscode';
import { insertuuid } from './commands';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('extension.insertuuid', insertuuid)
  );
}
