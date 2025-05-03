import { useId, useState } from 'react';
import { cn } from '@workspace/ui/lib/utils';

interface DropzoneProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'placeholder' | 'value'> {
  value?: FileList;
  placeholder?: React.ReactNode;
  onFilesDropped?: (files: FileList) => void;
}

const DEFAULT_PLACEHOLDER =
  'Drag and drop files here, or click to browse files.';

const renderFiles = (
  fileList?: FileList,
  placeholder: React.ReactNode = DEFAULT_PLACEHOLDER,
) => {
  if (!fileList?.length) return placeholder;

  const renderedFileItems = Array.from<React.ReactNode>({
    length: fileList.length,
  });

  renderedFileItems.forEach((_, index) => {
    const file = fileList.item(index);

    if (!file) {
      renderedFileItems[index] = null;

      return;
    }

    renderedFileItems[index] = <span key={file.name}>{file.name}</span>;
  });

  return renderedFileItems;
};

export function Dropzone({
  ref,
  value,
  disabled,
  className,
  onFilesDropped,
  placeholder = DEFAULT_PLACEHOLDER,
  ...rest
}: DropzoneProps) {
  const inputId = useId();
  const [isDragging, setIsDragging] = useState(false);
  const [fileList, setFileList] = useState<FileList | undefined>(value);

  const handleDragOver = (event: React.DragEvent) => {
    if (disabled) return;

    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    if (disabled) return;

    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();

    if (disabled) return;

    setIsDragging(false);

    if (!event.dataTransfer.files?.length) return;

    if (typeof onFilesDropped === 'function') {
      onFilesDropped(event.dataTransfer.files);
    }

    setFileList(event.dataTransfer.files);

    event.dataTransfer.clearData();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;

    if (typeof onFilesDropped === 'function') {
      onFilesDropped(event.target.files);
    }

    setFileList(event.target.files);
  };

  return (
    <label
      tabIndex={0}
      role="button"
      htmlFor={inputId}
      onDrop={handleDrop}
      data-disabled={disabled}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      data-is-dragging={isDragging}
      className={cn(
        'p-5 data-[disabled="true"]:opacity-50 data-[is-dragging=true]:border-success rounded-md border border-muted-foreground border-dashed text-center transition-colors cursor-pointer text-muted-foreground hover:text-success/70 hover:border-success/70',
        className,
      )}
    >
      <p>{renderFiles(fileList, placeholder)}</p>

      <input
        {...rest}
        ref={ref}
        type="file"
        id={inputId}
        className="hidden"
        disabled={disabled}
        onChange={handleFileSelect}
      />
    </label>
  );
}
