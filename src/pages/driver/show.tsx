import { useShow } from "@refinedev/core";
import {
  Show,
  NumberField,
  TextFieldComponent as TextField,
} from "@refinedev/mui";
import { Typography, Stack } from "@mui/material";
import FullScreenImage from "components/fullscreenimg";
import "./DriverShow.css"; // Import custom CSS styles

export const DriverShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack className="driver-show-container" gap={2}>
        <Stack className="driver-info" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            Driver Information
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            ID
          </Typography>
          <NumberField value={record?.id ?? ""} />
          <Typography variant="body1" fontWeight="bold">
            Car Type
          </Typography>
          <TextField value={record?.carType} />
          <Typography variant="body1" fontWeight="bold">
            Car Make
          </Typography>
          <TextField value={record?.carMake} />
          <Typography variant="body1" fontWeight="bold">
            Car Model
          </Typography>
          <TextField value={record?.carModel} />
          <Typography variant="body1" fontWeight="bold">
            Manufacture Year
          </Typography>
          <NumberField value={record?.manufactureYear ?? ""} />
          <Typography variant="body1" fontWeight="bold">
            Color
          </Typography>
          <TextField value={record?.color} />
        </Stack>
        <Stack className="document-section" gap={2}>
          <Typography variant="h5" fontWeight="bold">
            Documents
          </Typography>
          <div className="document-item">
            <Typography variant="body1" fontWeight="bold">
              Registration Certificate
            </Typography>
            <FullScreenImage src={record?.registrationCertificate} />
          </div>
          <div className="document-item">
            <Typography variant="body1" fontWeight="bold">
              License Plate
            </Typography>
            <FullScreenImage src={record?.licensePlate} />
          </div>
          <div className="document-item">
            <Typography variant="body1" fontWeight="bold">
              Photos
            </Typography>
            <Stack direction="row" spacing={1}>
              {record?.photos?.map((item: any) => (
                <FullScreenImage src={item} key={item} />
              ))}
            </Stack>
          </div>
          <div className="document-item">
            <Typography variant="body1" fontWeight="bold">
              Vehicle Inspection Report
            </Typography>
            <FullScreenImage src={record?.vehicleInspictionReport} />
          </div>
          <div className="document-item">
            <Typography variant="body1" fontWeight="bold">
              Driver License
            </Typography>
            <FullScreenImage src={record?.driverLicense} />
          </div>
        </Stack>
        <div className="status-section">
          <Typography variant="h5" fontWeight="bold">
            Status
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Status
          </Typography>
          <TextField value={record?.status} />
          <Typography variant="body1" fontWeight="bold">
            Comments
          </Typography>
          <TextField value={record?.comments} />
        </div>
      </Stack>
    </Show>
  );
};
