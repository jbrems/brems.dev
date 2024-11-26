---
title: Encryption vs hashing vs encoding
description: A short description of the differences between encrypting, hashing, and encoding.
created: 2024-11-26
highlight: 1
---

## Encryption

Encryption is the transformation of data into a `cipher` using an encryption `algorithm` and a `key`.

The encrypted `cipher` can be decrypted using the same `algorithm` and `key`.

Encryption is often used to pass data between trusted parties (knowing the `key`) without third parties (not knowing the `key`) being able to see the contents of the data.

Common encryption algorithms are `RSA` and `AES`.

## Hashing

Hashing transforms data into a fixed length `hash` using a fast mathematical algorithm.

Unlike an encryption `cipher`, a `hash` value cannot be reverted to its original data.

Hashing is often used for storing sensitive data (like passwords) to prevent the contents from leaking in the event of a data breach.

Hashing is also used to verify the accompanying data has not been tampered with.

Sensitive data is often prefixed with a `salt` before being hashed to prevent the comparison of hashes with a huge list of pre-hashed words and terms (rainbow tables).

Common hashing algorithms are `SHA-265` and `Bcrypt`.

## Encoding

Encoding is simply converting data from one format to another using an algorithm.

Encoding is easily reversible and should not be used for securing data.

Encoding is often used to pass "complex" data or data containing reserved characters in URL query parameters.

Encoding is also also used to convert text to binary data.

Common encoding algorithms are `Base64` and `UTF-8`.
