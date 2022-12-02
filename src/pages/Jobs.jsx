import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import InputForm from '../components/InputForm';
import Heading from './../components/Heading';
import data from './../data/jobs';
import './jobs.css';
const Jobs = () => {
  const [dataJobs] = useState(data);
  const [job, setJob] = useState('');
  const [department, setDepartment] = useState('');
  const inputSelectStyle = {
    fontSize: '1.6rem',
    color: '#1A202C',
    fontWeight: 500,
    borderRadius: '5rem',
  };
  const handleJob = (event) => {
    setJob(event.target.value);
  };
  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };
  return (
    <section className="job-section">
      <Heading
        headingTitle="- Join our Team"
        headingDescription="Explore the Careers"
        position="left"
      />
      <div className="jobs">
        <div className="job-filter">
          <h2 className="filter-title">Filter By</h2>
          <form className="filter-form">
            <InputForm
              labelValue="Job Title"
              inputType="text"
              inputName="job"
            />
            <FormControl
              sx={{
                mt: 5,
                border: '2px solid var(--icon-background)',
                borderRadius: '5rem',
              }}
              fullWidth
            >
              <Select
                sx={{
                  borderRadius: '3rem',
                  py: 1,
                  ...inputSelectStyle,
                  fontSize: '1.8rem',
                  fontWeight: 600,
                }}
                value={job}
                onChange={handleJob}
              >
                <MenuItem sx={inputSelectStyle} value={'USA'}>
                  USA
                </MenuItem>
                <MenuItem sx={inputSelectStyle} value={'Canada'}>
                  Canada
                </MenuItem>
                <MenuItem sx={inputSelectStyle} value={'Paris'}>
                  Paris
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                mt: 5,
                border: '2px solid var(--icon-background)',
                borderRadius: '5rem',
              }}
              fullWidth
            >
              <Select
                sx={{
                  borderRadius: '3rem',
                  py: 1,
                  ...inputSelectStyle,
                  fontSize: '1.8rem',
                  fontWeight: 600,
                }}
                value={department}
                onChange={handleDepartment}
              >
                <MenuItem sx={inputSelectStyle} value={'Sales & Marketing'}>
                  Sales & Marketing
                </MenuItem>
                <MenuItem sx={inputSelectStyle} value={'Sort By 1'}>
                  Sort By 1
                </MenuItem>
                <MenuItem sx={inputSelectStyle} value={'Sort By 2'}>
                  Sort By 2
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{
                borderRadius: '3rem',
                width: '100%',
                backgroundColor: '#00cc96',
                fontSize: '2rem',
                fontWeight: '700',
                padding: '1.5rem 4rem',
                my: 5,
              }}
            >
              Apply Filters
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '3rem',
                borderColor: 'var(--icon-background)',
                width: '100%',
                color: '#1A202C',
                fontSize: '2rem',
                fontWeight: '700',
                padding: '1.5rem 4rem',
              }}
            >
              Clear All
            </Button>
          </form>
        </div>
        <div className="job-information">
          {dataJobs.map((el, index) => {
            return (
              <article key={index} className="job-wrapper">
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '3rem',
                    width: 'fit-content',
                    backgroundColor: '#00cc96',
                    fontSize: '2rem',
                    fontWeight: '700',
                    padding: '1.5rem 4rem',
                  }}
                >
                  Apply
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
