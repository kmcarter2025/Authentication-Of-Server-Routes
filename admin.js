const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "courso-beeff";
const private_key_id = "dd78528bef8df14327a57630479efd2f2b14c1ca";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgO4W7zCFSyJ3y\n+ZiqT7CRFMGPs0n/SqeW5rwahzuGtj6HKiQFFG8RdSjXxLc8SOW8O/965K7QYxBV\n0E3Q0edXi4du7l3LSKKYngo/BBddKfUo7P0uOQkBQxNyM+LX9wfnHx7eJk5BmaID\nsBP9yNefyJL9LPWpI4buzbwvEdIURnAAEyS412sGM+j5Nedr2WfvzZPVb2AjLxya\nJkLR/3EEveqhzw7jVfYN5HgRUX0bndmKFzS0DcAQw246KKK8/cCusEUlEWI2ai14\nJuCNGdV6tvm0JeJ2+iAnYQX49uo89UJNjwaSZBRilYdI0j7F+IAD+gJsu3WeFtCb\nDi+eYEWbAgMBAAECggEAAIhjrBkg7EiS4u3DLRj9FrID7gF6MPXzBSGfyVzrwCTC\ntUXK7mcEBtQFStKFsFxojQtfcysD7iyJgtPUKTe2dUnvS5Yt+Sg/TzmFedqRfe2/\nToQofddWkLXqqQ3ygXX/8M6kH0cAmAa8kKrSJekTZYIUNQrulxCTZu1H7Xghp+/Q\nn8g5zcDje0XZmw37GFRDaLhfX0Z5pvChz7yx1+F20VtXBgs9NmYIKTAfx9J2zDRJ\nXeZHNyppZlk0G/HX7gDPqAf+sHHAEs7NdsGtk04eOZYw9tu1p0jAGmqDCHy1bJhP\ndPUjxE7RwSfWJdIKM7aAIbIzLpd7Lc7rvBOeFpWaUQKBgQD950AcsKV731NYQ8N6\nRM2kCUGoHL8Z0BNrjmguYOWSujlE81LJ+0be2vqbS4YV82ZWf8G4xv0TddOLzS92\nwiiwA/Ryo9IeFhzKIXP1Od2sEUO4QXtKT3Xql6TSkNZEoEKFu0D8O2INqYK+sEGq\nWZO+/uCA8a0BSBUxpoIX3xl5VQKBgQDiFYxQZ1m1lHuKDfccyifozRIcNlsjlkgE\n/UnO6n09tGqoGo9XWgkA/sZzLEMabsWasLr9i4FrANCZnAYPlCdbYJ7sjp3E2kg+\nfEdGttnSh0xNWDGA6cnL1acHfThHZx2/p2avLpZbUIcC76ALM1djOLGpg9SV6kZ7\nfsWZDysDLwKBgFBJ9CgeY/YL5NsgcowTfcPFeZGjpXqQJdP5MFCaK35+jOWU3DUq\n1HpcXKsG8tu2IEJyG9xGcHja5Y5rz/qJ4zvlxEMMMsF41JnGglild8eVngiCDG6v\nOeZ5FZHQYzFITEDlueMJFDSlycZrDhjEQsg+6NddlQu2s50Dvle2IOQRAoGBANun\nZdjkYLNbXJ+nq9PL0PSM8TB52xh7NOOsFt6y0hV2ST2j+Go87oyJ+9MASP3Qa6o8\nVKBrvsRwWTs07GqMXaSY/i8E7OHJ1fDnm/RnSMATdZ2btxTxj367yHktPtWYqL2A\n7fH7yFdVqKbAm3TmX9vlxC7XB17T68CmTWLE6tw/AoGAYUE0vv2PyJWaRNhy/Wms\nkScSlaut0vX//GcqnhAkFv/3Wj2+YUpEHCuxwPqpFSPIIlgcIhbXOZ+4ZSiqDtSJ\n34i7ac26e6kiBWdo5CYEOeCQG3rWtlski2XoZGvLixfT+uWGMXLADkeTh99m/HoK\n8++irCsS86z3oATPB2Q/3K4=\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-ho97p@courso-beeff.iam.gserviceaccount.com";
const client_id = "117463499078150876335";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ho97p%40courso-beeff.iam.gserviceaccount.com";


// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;