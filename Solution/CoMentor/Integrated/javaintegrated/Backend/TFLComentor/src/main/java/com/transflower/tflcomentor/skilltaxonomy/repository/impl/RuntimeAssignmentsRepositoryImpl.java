// package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.util.ArrayList;
// import java.util.List;

// import org.springframework.stereotype.Repository;

// import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeAssignmentResponse;
// import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimeAssignmentsRepository;

// @Repository
// public class RuntimeAssignmentsRepositoryImpl implements RuntimeAssignmentsRepository {

//     @Override
//     public List<RuntimeAssignmentResponse> findAssignmentsByRuntimeId(Long runtimeId) {
//         String query = """
//                 select
//                     sr.sme_runtime_id,
//                     u.id as user_id,
//                     coalesce(
//                         nullif(trim(pi.full_name), ''),
//                         nullif(trim(concat_ws(' ', pi.first_name, pi.last_name)), ''),
//                         concat('SME #', cast(coalesce(u.id, sr.user_id, ur.user_id) as char))
//                     ) as user_name,
//                     coalesce(
//                         nullif(trim(pi.email), ''),
//                         nullif(trim(u.contact), ''),
//                         concat('User ID ', cast(coalesce(u.id, sr.user_id, ur.user_id) as char))
//                     ) as user_contact,
//                     upper(coalesce(nullif(trim(u.status), ''), 'UNKNOWN')) as user_status
//                 from sme_runtimes sr
//                 left join user_roles ur on ur.id = sr.user_roles_id
//                 left join users u on u.id = coalesce(sr.user_id, ur.user_id)
//                 left join personal_informations pi on pi.user_id = u.id
//                 where sr.runtime_id = ?
//                 order by sr.sme_runtime_id asc
//                 """;

//         List<RuntimeAssignmentResponse> results = new ArrayList<>();

//         try (PreparedStatement ps = RuntimeRepositoryImpl.getConnection().prepareStatement(query)) {
//             ps.setLong(1, runtimeId);

//             try (ResultSet rs = ps.executeQuery()) {
//                 while (rs.next()) {
//                     results.add(new RuntimeAssignmentResponse(
//                             rs.getLong("sme_runtime_id"),
//                             (Long) rs.getObject("user_id"),
//                             rs.getString("user_name"),
//                             rs.getString("user_contact"),
//                             rs.getString("user_status")));
//                 }
//             }
//         } catch (Exception e) {
//             throw new RuntimeException("Failed to fetch runtime assignments for id=" + runtimeId, e);
//         // }

//         return results;
//     }
// }
