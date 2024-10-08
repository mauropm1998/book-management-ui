/**
 * OpenApi specification - Mauro
 * OpenApi documentation for Spring Security
 *
 * The version of the OpenAPI document: 1.0
 * Contact: maurocristovao1998@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BookTransactionHistory from './BookTransactionHistory';
import Feedback from './Feedback';
import User from './User';

/**
 * The Book model module.
 * @module model/Book
 * @version 1.0
 */
class Book {
    /**
     * Constructs a new <code>Book</code>.
     * @alias module:model/Book
     * @param title {String} 
     * @param authorName {String} 
     * @param isbn {String} 
     */
    constructor(title, authorName, isbn) { 
        
        Book.initialize(this, title, authorName, isbn);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, authorName, isbn) { 
        obj['title'] = title;
        obj['authorName'] = authorName;
        obj['isbn'] = isbn;
    }

    /**
     * Constructs a <code>Book</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Book} obj Optional instance to populate.
     * @return {module:model/Book} The populated <code>Book</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Book();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('lastModifiedBy')) {
                obj['lastModifiedBy'] = ApiClient.convertToType(data['lastModifiedBy'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('authorName')) {
                obj['authorName'] = ApiClient.convertToType(data['authorName'], 'String');
            }
            if (data.hasOwnProperty('isbn')) {
                obj['isbn'] = ApiClient.convertToType(data['isbn'], 'String');
            }
            if (data.hasOwnProperty('synopsis')) {
                obj['synopsis'] = ApiClient.convertToType(data['synopsis'], 'String');
            }
            if (data.hasOwnProperty('bookCover')) {
                obj['bookCover'] = ApiClient.convertToType(data['bookCover'], 'String');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('shareable')) {
                obj['shareable'] = ApiClient.convertToType(data['shareable'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = User.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('feedbacks')) {
                obj['feedbacks'] = ApiClient.convertToType(data['feedbacks'], [Feedback]);
            }
            if (data.hasOwnProperty('histories')) {
                obj['histories'] = ApiClient.convertToType(data['histories'], [BookTransactionHistory]);
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Book</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Book</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Book.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['authorName'] && !(typeof data['authorName'] === 'string' || data['authorName'] instanceof String)) {
            throw new Error("Expected the field `authorName` to be a primitive type in the JSON string but got " + data['authorName']);
        }
        // ensure the json data is a string
        if (data['isbn'] && !(typeof data['isbn'] === 'string' || data['isbn'] instanceof String)) {
            throw new Error("Expected the field `isbn` to be a primitive type in the JSON string but got " + data['isbn']);
        }
        // ensure the json data is a string
        if (data['synopsis'] && !(typeof data['synopsis'] === 'string' || data['synopsis'] instanceof String)) {
            throw new Error("Expected the field `synopsis` to be a primitive type in the JSON string but got " + data['synopsis']);
        }
        // ensure the json data is a string
        if (data['bookCover'] && !(typeof data['bookCover'] === 'string' || data['bookCover'] instanceof String)) {
            throw new Error("Expected the field `bookCover` to be a primitive type in the JSON string but got " + data['bookCover']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          User.validateJSON(data['owner']);
        }
        if (data['feedbacks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['feedbacks'])) {
                throw new Error("Expected the field `feedbacks` to be an array in the JSON data but got " + data['feedbacks']);
            }
            // validate the optional field `feedbacks` (array)
            for (const item of data['feedbacks']) {
                Feedback.validateJSON(item);
            };
        }
        if (data['histories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['histories'])) {
                throw new Error("Expected the field `histories` to be an array in the JSON data but got " + data['histories']);
            }
            // validate the optional field `histories` (array)
            for (const item of data['histories']) {
                BookTransactionHistory.validateJSON(item);
            };
        }

        return true;
    }


}

Book.RequiredProperties = ["title", "authorName", "isbn"];

/**
 * @member {Number} id
 */
Book.prototype['id'] = undefined;

/**
 * @member {Date} createdDate
 */
Book.prototype['createdDate'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
Book.prototype['lastModifiedDate'] = undefined;

/**
 * @member {Number} createdBy
 */
Book.prototype['createdBy'] = undefined;

/**
 * @member {Number} lastModifiedBy
 */
Book.prototype['lastModifiedBy'] = undefined;

/**
 * @member {String} title
 */
Book.prototype['title'] = undefined;

/**
 * @member {String} authorName
 */
Book.prototype['authorName'] = undefined;

/**
 * @member {String} isbn
 */
Book.prototype['isbn'] = undefined;

/**
 * @member {String} synopsis
 */
Book.prototype['synopsis'] = undefined;

/**
 * @member {String} bookCover
 */
Book.prototype['bookCover'] = undefined;

/**
 * @member {Boolean} archived
 */
Book.prototype['archived'] = undefined;

/**
 * @member {Boolean} shareable
 */
Book.prototype['shareable'] = undefined;

/**
 * @member {module:model/User} owner
 */
Book.prototype['owner'] = undefined;

/**
 * @member {Array.<module:model/Feedback>} feedbacks
 */
Book.prototype['feedbacks'] = undefined;

/**
 * @member {Array.<module:model/BookTransactionHistory>} histories
 */
Book.prototype['histories'] = undefined;

/**
 * @member {Number} rate
 */
Book.prototype['rate'] = undefined;






export default Book;

