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

const Build = require('../../../lib/Build');
const Options = require('../../../lib/util/Options');

const COMMAND = 'list';
const COMMAND_SECTION = 'build';
const COMMAND_DESCRIPTION = 'Displays info about all or filtered Builds (Deployments) available for a user';
const COMMAND_OPTIONS = '[--product-id <product_id>] [--product-name <product_name>] [--dg-id <device_group_id>] [--dg-name <device_group_name>] ' +
                        '[--sha <deployment_sha>] [--flagged ([true]|false)] [--tag <tag>] [--help]';

exports.command = COMMAND;

exports.describe = COMMAND_DESCRIPTION;

exports.builder = function (yargs) {
    return yargs
        .usage(Options.getUsage(COMMAND_SECTION, COMMAND, COMMAND_DESCRIPTION, COMMAND_OPTIONS))
        .options(Options.getOptions({
            [Options.PRODUCT_ID] : { demandOption : false, describeFormatArgs : ['Builds'] },
            [Options.PRODUCT_NAME] : { demandOption : false, describeFormatArgs : ['Builds'] },
            [Options.DEVICE_GROUP_ID] : { demandOption : false, describeFormatArgs : ['Builds'] },
            [Options.DEVICE_GROUP_NAME] : { demandOption : false, describeFormatArgs : ['Builds'] },
            [Options.SHA] : { demandOption : false, describe : 'List Builds with the specified Deployment SHA' },
            [Options.TAG] : { demandOption : false, describe : 'List Builds with the specified Deployment tag' },
            [Options.FLAGGED] : { demandOption : false, describe : 'List Builds with the specified flagged marker' }
        }))
        .strict();
};

exports.handler = function (argv) {
    if (!Options.checkCommandArgs(argv)) {
        return;
    }
    new Build().list(new Options(argv));
};
