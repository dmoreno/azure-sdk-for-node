/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the USqlDirectedColumn class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL directed column item.
 * @member {string} [name] Gets or sets the name of the index in the table.
 * 
 * @member {boolean} [descending] Gets or sets the switch indicating if the
 * index is descending or not.
 * 
 */
function USqlDirectedColumn() {
}

/**
 * Defines the metadata of USqlDirectedColumn
 *
 * @returns {object} metadata of USqlDirectedColumn
 *
 */
USqlDirectedColumn.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlDirectedColumn',
    type: {
      name: 'Composite',
      className: 'USqlDirectedColumn',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        descending: {
          required: false,
          serializedName: 'descending',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = USqlDirectedColumn;