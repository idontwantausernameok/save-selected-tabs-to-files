/*
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
'use strict';

export const kTST_ID = 'treestyletab@piro.sakura.ne.jp';

export const kTSTAPI_REGISTER_SELF           = 'register-self';
export const kTSTAPI_UNREGISTER_SELF         = 'unregister-self';
export const kTSTAPI_PING                    = 'ping';
export const kTSTAPI_NOTIFY_READY            = 'ready';
export const kTSTAPI_GET_TREE                = 'get-tree';
export const kTSTAPI_GET_TREE_STRUCTURE      = 'get-tree-structure';
export const kTSTAPI_CONTEXT_MENU_SHOWN      = 'fake-contextMenu-shown';
export const kTSTAPI_CONTEXT_MENU_CREATE     = 'fake-contextMenu-create';
export const kTSTAPI_CONTEXT_MENU_UPDATE     = 'fake-contextMenu-update';
export const kTSTAPI_CONTEXT_MENU_REMOVE     = 'fake-contextMenu-remove';
export const kTSTAPI_CONTEXT_MENU_REMOVE_ALL = 'fake-contextMenu-remove-all';
export const kTSTAPI_CONTEXT_MENU_CLICK      = 'fake-contextMenu-click';


export const kMTH_ID = 'multipletab@piro.sakura.ne.jp';

export const kMTHAPI_READY                       = 'ready';
export const kMTHAPI_GET_TAB_SELECTION           = 'get-tab-selection';
export const kMTHAPI_SET_TAB_SELECTION           = 'set-tab-selection';
export const kMTHAPI_CLEAR_TAB_SELECTION         = 'clear-tab-selection';
export const kMTHAPI_ADD_SELECTED_TAB_COMMAND    = 'add-selected-tab-command';
export const kMTHAPI_REMOVE_SELECTED_TAB_COMMAND = 'remove-selected-tab-command';
export const kMTHAPI_REMOVE_ALL_SELECTED_TAB_COMMANDS = 'remove-all-selected-tab-commands';
export const kMTHAPI_INVOKE_SELECTED_TAB_COMMAND = 'selected-tab-command';
