# OpenApiSpecificationMauro.FeedbackApi

All URIs are relative to *http://localhost:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAllByBook**](FeedbackApi.md#findAllByBook) | **GET** /feedbacks/book/{bookId} | 
[**save**](FeedbackApi.md#save) | **POST** /feedbacks | 



## findAllByBook

> PageResponseFeedback findAllByBook(bookId, opts)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.FeedbackApi();
let bookId = 789; // Number | 
let opts = {
  'page': 0, // Number | 
  'size': 20 // Number | 
};
apiInstance.findAllByBook(bookId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**|  | 
 **page** | **Number**|  | [optional] [default to 0]
 **size** | **Number**|  | [optional] [default to 20]

### Return type

[**PageResponseFeedback**](PageResponseFeedback.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## save

> Feedback save(feedback)



### Example

```javascript
import OpenApiSpecificationMauro from 'open_api_specification_mauro';
let defaultClient = OpenApiSpecificationMauro.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenApiSpecificationMauro.FeedbackApi();
let feedback = new OpenApiSpecificationMauro.Feedback(); // Feedback | 
apiInstance.save(feedback, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedback** | [**Feedback**](Feedback.md)|  | 

### Return type

[**Feedback**](Feedback.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

