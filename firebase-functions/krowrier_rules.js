service cloud.firestore {
  match /databases/{database}/documents {
    function superAdminAuthentication () 
    {
       return request.auth.uid != null && get(/databases/$(database)/documents/user/$(request.auth.uid)).data.current_role == "super_admin"
     }
    
    match /hub/{hubID} {
    	allow read: if true;
      allow update, write: if superAdminAuthentication();
      allow delete:if;
    }
    
    match /service_package/{servicePackageID} {
    	allow read: if true;
    	allow update, write, delete: if superAdminAuthentication();
    }

  }
}