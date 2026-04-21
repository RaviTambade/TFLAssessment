package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class RuntimeAssignmentResponse {

    private Long smeRuntimeId;
    private Long userId;
    private String userName;
    private String userContact;
    private String userStatus;

    public RuntimeAssignmentResponse(
            Long smeRuntimeId,
            Long userId,
            String userName,
            String userContact,
            String userStatus) {
        this.smeRuntimeId = smeRuntimeId;
        this.userId = userId;
        this.userName = userName;
        this.userContact = userContact;
        this.userStatus = userStatus;
    }

    public Long getSmeRuntimeId() {
        return smeRuntimeId;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserContact() {
        return userContact;
    }

    public String getUserStatus() {
        return userStatus;
    }
}
