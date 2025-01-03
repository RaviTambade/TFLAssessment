using Microsoft.EntityFrameworkCore;
using Transflower.TFLAssessment.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Repositories
{
    public class InterviewEFCoreRepository : IInterviewRepository
    {
        private readonly TFLAssessmentDbContext _context;

        public InterviewEFCoreRepository(TFLAssessmentDbContext context)
        {
            _context = context;
        }

        public async Task<List<InterviewCandidateDetails>> GetAllInterviewCandidates()
        {
            return await _context.Interviews
                .Join(_context.Employees, i => i.CandidateId, e => e.Id, (i, e) => new { i, e })
                .Select(ie => new InterviewCandidateDetails
                {
                    CandidateId = ie.e.Id,
                    FirstName = ie.e.FirstName,
                    LastName = ie.e.LastName
                })
                .ToListAsync();
        }

        public async Task<List<InterviewCandidateDetails>> GetInterviewedCandidatesSubjects(int candidateId)
        {
            return await _context.Interviews
                .Where(i => i.CandidateId == candidateId)
                .Join(_context.Employees, i => i.CandidateId, e => e.Id, (i, e) => new { i, e })
                .Join(_context.SubjectMatterExperts, ie => ie.i.SmeId, sme => sme.Id, (ie, sme) => new { ie, sme })
                .Join(_context.Subjects, ies => ies.sme.SubjectId, s => s.Id, (ies, s) => new InterviewCandidateDetails
                {
                    CandidateId = ies.ie.e.Id,
                    FirstName = ies.ie.e.FirstName,
                    LastName = ies.ie.e.LastName,
                    Title = s.Title
                })
                .ToListAsync();
        }

        public async Task<InterviewDetails> GetInterviewDetails(int interviewId)
        {
            return await _context.Interviews
                .Where(i => i.Id == interviewId)
                .Select(i => new InterviewDetails
                {
                    Id = i.Id,
                    InterviewDate = i.InterviewDate.ToString("yyyy-MM-dd"),
                    InterviewTime = i.InterviewTime,
                    SMEName = _context.SubjectMatterExperts
                        .Where(sme => sme.Id == i.SmeId)
                        .Select(sme => sme.Employee.FirstName)
                        .FirstOrDefault(),
                    CandidateName = _context.Employees
                        .Where(e => e.Id == i.CandidateId)
                        .Select(e => e.FirstName)
                        .FirstOrDefault()
                })
                .FirstOrDefaultAsync();
        }


        public async Task<bool> RescheduleInterview(int interviewId, DateTime date)
        {
            var interview = await _context.Interviews.FindAsync(interviewId);
            if (interview == null) return false;

            interview.InterviewDate = date;
            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<bool> RescheduleInterview(int interviewId, string time)
        {
            var interview = await _context.Interviews.FindAsync(interviewId);
            if (interview == null) return false;

            interview.InterviewTime = time;
            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<bool> RescheduleInterview(int interviewId, string time, DateTime date)
        {
            var interview = await _context.Interviews.FindAsync(interviewId);
            if (interview == null) return false;

            interview.InterviewDate = date;
            interview.InterviewTime = time;
            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<bool> ChangeInterviewer(int interviewId, int smeId)
        {
            var interview = await _context.Interviews.FindAsync(interviewId);
            if (interview == null) return false;

            interview.SmeId = smeId;
            await _context.SaveChangesAsync();
            return true;
        }
        

        public async Task<bool> CancelInterview(int interviewId)
        {
            var interview = await _context.Interviews.FindAsync(interviewId);
            if (interview == null) return false;

            _context.Interviews.Remove(interview);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
