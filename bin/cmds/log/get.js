// MIT License
//
// Copyright 2017 Electric Imp
//
// SPDX-License-Identifier: MIT
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
// EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
// OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const Log = require('../../../lib/Log');
const Options = require('../../../lib/util/Options');

const COMMAND = 'get';
const COMMAND_SECTION = 'log';
const COMMAND_DESCRIPTION = 'Displays historical logs for the specified Device';
const COMMAND_OPTIONS = '[--device <DEVICE_IDENTIFIER>] [--help]';

exports.command = COMMAND;

exports.describe = COMMAND_DESCRIPTION;

exports.builder = function (yargs) {
    return yargs
        .usage(Options.getUsage(COMMAND_SECTION, COMMAND, COMMAND_DESCRIPTION, COMMAND_OPTIONS))
        .options(Options.getOptions({
            [Options.DEVICE_IDENTIFIER] : false
        }))
        .strict();
};

exports.handler = function (argv) {
    if (!Options.checkCommandArgs(argv)) {
        return;
    }
    new Log().get(new Options(argv));
};
