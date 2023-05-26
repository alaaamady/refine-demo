import { Edit } from "@refinedev/mui";
import { Box, MenuItem, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";

export const DriverEdit = () => {
  const {
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("status", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.status}
          helperText={(errors as any)?.status?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          select // Use select instead of text to render a dropdown
          label="Status"
          name="status"
        >
          <MenuItem value="verified">Verified</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </TextField>
        <TextField
          {...register("comments", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.comments}
          helperText={(errors as any)?.comments?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline // Allow multiple lines of text
          rows={4} // Adjust the number of rows as needed
          type="text"
          label="Comments"
          name="comments"
        />
      </Box>
    </Edit>
  );
};
