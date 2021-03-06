/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PoolEnableAutoScaleParameter class.
 * @constructor
 * Parameters for a CloudPoolOperations.EnableAutoScale request.
 * @member {string} [autoScaleFormula] The formula for the desired number of
 * compute nodes in the pool.
 * 
 * @member {moment.duration} [autoScaleEvaluationInterval] A time interval for
 * the desired autoscale evaluation period in the pool.
 * 
 */
function PoolEnableAutoScaleParameter() {
}

/**
 * Defines the metadata of PoolEnableAutoScaleParameter
 *
 * @returns {object} metadata of PoolEnableAutoScaleParameter
 *
 */
PoolEnableAutoScaleParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolEnableAutoScaleParameter',
    type: {
      name: 'Composite',
      className: 'PoolEnableAutoScaleParameter',
      modelProperties: {
        autoScaleFormula: {
          required: false,
          serializedName: 'autoScaleFormula',
          type: {
            name: 'String'
          }
        },
        autoScaleEvaluationInterval: {
          required: false,
          serializedName: 'autoScaleEvaluationInterval',
          type: {
            name: 'TimeSpan'
          }
        }
      }
    }
  };
};

module.exports = PoolEnableAutoScaleParameter;
